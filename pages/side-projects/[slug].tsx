import {Box, Flex, Heading} from "@chakra-ui/react";

import React from "react";
import LayoutSideProjects from "../../components/LayoutSideProjects";
import {getAllJournal, getSingleJournal, getStaticPathsForJournal} from "../../utils/mdx";
import {getMDXComponent} from "mdx-bundler/client";
import * as Components from "../../components";
import {dateToDay, monthNumberToMonthName} from "../../utils/dateUtil";
import SideProjectSummary from "../../components/molecules/sideProject/summary";


const SideProjectsProjectManagement = (props: any) => {
    const {journals, years} = props

    return (
        <LayoutSideProjects title="PROJECT MANAGEMENT">
            <Flex direction="column" width={1000}>
                {years.map((year) => {

                    const filteredJournals = journals.filter((journal) => {
                        const journalDate = new Date(journal.frontmatter.date);
                        const journalYear = journalDate.getFullYear();
                        return year === journalYear
                    })

                    return (
                        <>
                            <Heading as="h1" size="xl" pl={5} position="sticky" top={0} width="100%"
                                     bg="white" zIndex={999}>{year}</Heading>

                            <Flex direction="column" ml={0}>
                                {filteredJournals.map((journal, key) => {

                                    const date = dateToDay(journal.frontmatter.date);

                                    const Component = getMDXComponent(journal.code);
                                    const MDXWrapper = (props) => <div className='mdx-prose' {...props} ><Component
                                        components={{
                                            // @ts-ignore
                                            Components
                                        }}/></div>

                                    return (
                                        <Box bg="white" width="100%">
                                            <SideProjectSummary day={date.day}
                                                                month={monthNumberToMonthName(date.month)}>
                                                <b>{journal.frontmatter.title}</b>
                                            </SideProjectSummary>
                                            <MDXWrapper/>
                                        </Box>
                                    )

                                })}
                            </Flex>
                        </>
                    )
                })}
            </Flex>


        </LayoutSideProjects>
    )
}

export const getStaticProps = async ({params}) => {
    try {
        const allJournals = await getAllJournal();
        const allJournalsFiltered = allJournals.journals.filter((journal) => {
            return journal.frontmatter.tag === params.slug
        })

        const allJournalFilteredWithCode = await Promise.all(allJournalsFiltered.map(async (journal) => {
            return await getSingleJournal(journal.slug)
        }))


        return {
            props: {
                journals: allJournalFilteredWithCode,
                years: allJournals.years,
            },
        };
    } catch (err) {
        return {props: {errors: err.message}};
    }
};

export const getStaticPaths = async () => {
    const paths = getStaticPathsForJournal();
    const filteredPaths = paths.filter((path) => {
        return path.params.frontmatter.type === "SIDE_PROJECT"
    })

    const projectPaths = filteredPaths.map((path) => {
        return ({
            params: {
                slug: path.params.frontmatter.tag,
                frontmatter: path.params.frontmatter
            }
        })
    })
    return {
        paths: projectPaths,
        fallback: false,
    };
};


export default SideProjectsProjectManagement
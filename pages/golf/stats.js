import { getRoundSummaries } from "../../lib/golfapi"
import Layout from "../../components/layout";
import { distinct, groupBy, mean } from "../../lib/utils";
import { useState } from "react";
export async function getStaticProps() {

    const allRounds = await getRoundSummaries();
    const allCourses = distinct(allRounds.map(r => r.course))
    const allCompanions = distinct(allRounds.map(r => r.playedWith))
    const scoresByCourse = groupBy(allRounds, r => r.course)

    const bestRounds = []
    for (let [k, v] of scoresByCourse) {
        const min = Math.min(...v.map(h => +h.score))
        const meanScore = mean(v.map(h => +h.score))
        const date = v.find(h => +h.score === min).date;
        bestRounds.push({ bestScore: min, meanScore: meanScore, course: k, date: date });
    }

    const stats = {
        totalRounds: allRounds.length,
        totalCourses: allCourses.length,
        totalCompanions: allCompanions.length,
        bestRounds: bestRounds,
    }
    return {
        props: {
            stats
        }
    }
}

const NumberCard = ({ title, value, details }) => {
    return (
        <Card>
            <div className="border-b-2 text-xl  text-center ">{title}</div>
            <div className="text-6xl border-t-2 border-blue-600 text-center mt-auto">{value}</div>
            {details && Object.entries(details).map((e, i) => (
                <div className="text-center mt-auto border-t-2 capitalize border-blue-600" key={i}>{e[0]}: {e[1]}</div>
            ))}
        </Card>
    )
}



const Card = ({ children }) => {
    return (
        <div className="min-w-400px flex-wrap flex-col text-r border-2  rounded-2xl p-2 border-red-500 bg-slate-200 flex-grow-1">
            {children}
        </div>
    )
}

export default function Stats({ stats }) {
    return (
        <Layout>
            <div>
                <div className="flex flex-wrap gap-1 m-2">
                    <NumberCard value={stats.totalCourses} title="Total courses played" ></NumberCard>
                    <NumberCard value={stats.totalRounds} title="Total rounds played" ></NumberCard>
                    <NumberCard value={stats.totalCompanions} title="Total companions played with" ></NumberCard>
                    {stats.bestRounds.map((v, i) => (
                        <NumberCard value={v.bestScore}
                            title={`${v.course} best score`} key={i} details={{ date: v.date, average: v.meanScore }}></NumberCard>
                    ))}
                </div>
            </div>
        </Layout >



    )
}
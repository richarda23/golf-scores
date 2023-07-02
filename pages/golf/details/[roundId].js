import { getRoundDetails, getCourseByName } from "../../../lib/golfapi"
import { roundScore, puttScore } from "../../../lib/utils";
import Layout from "../../../components/layout"
import StyledLink from "../../../components/link";
import ScoreCard from "../../../components/scoreCard";



export async function getServerSideProps({ params }) {
    console.log(params);
    const roundId = params.roundId
    const roundDetails = await getRoundDetails(roundId)
    const courseName = roundDetails[0].course;
    const courseDetails = await getCourseByName(courseName);
    console.log(courseDetails);
    return { props: { details: roundDetails, course: courseDetails } }
}

export default function RoundDetails({ details, course }) {

    if (details.length == 0) {
        return (
            <>
                No round with that id exists.
                <div>
                    <StyledLink href="/golf/courses">Back to courses</StyledLink>
                </div>
            </>
        )
    } else
        return (
            <Layout>

                <div>
                    <div style={{ marginBottom: "5px" }}>

                        {`Round ${details[0].roundId} played at ${details[0].course}`}
                    </div>
                    <div>
                        <ScoreCard holeDetails={details} course={course} />
                    </div>
                    <div style={{ marginTop: "8px" }}>
                        Total score: {roundScore(details)} <br />
                        Total putts: {puttScore(details)} <br />
                    </div>
                    {details[0].roundId != 1 && <StyledLink href={`/golf/details/${details[0].roundId - +1}`}>
                        Previous round
                    </StyledLink>}
                    <span style={{ paddingLeft: "10px" }}>

                        {<StyledLink href={`/golf/details/${details[0].roundId + +1}`}>
                            Next round
                        </StyledLink>}
                    </span>
                </div>
            </Layout>

        )
}
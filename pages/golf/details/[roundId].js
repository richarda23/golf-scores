import { getRoundDetails } from "../../../lib/golfapi"
import Link from "next/link";
import { roundScore, puttScore } from "../../../lib/utils";


export async function getServerSideProps({ params }) {
    console.log(params);
    const roundId = params.roundId
    const roundDetails = await getRoundDetails(roundId)
    return { props: { details: roundDetails } }
}

export default function RoundDetails({ details }) {
    if (details.length == 0) {
        return (
            <>
                No hole with that id exists
                <div>
                    <Link href="/golf/courses">Back to courses</Link>
                </div>
            </>
        )
    } else
        return (
            <div>
                <div style={{ marginBottom: "5px" }}>

                    {`Round ${details[0].roundId} played at ${details[0].course}`}
                </div>
                <div>
                    {details.map(hole => (
                        <div key={hole.holeNumber}>
                            Score : {hole.score}, Putts: {hole.putts}
                        </div>

                    ))}
                </div>
                <div style={{ marginTop: "8px" }}>
                    Total score: {roundScore(details)} <br />
                    Total putts: {puttScore(details)} <br />
                </div>
                {details[0].roundId != 1 && <Link href={`/golf/details/${details[0].roundId - +1}`}>
                    Previous round
                </Link>}
                <span style={{ paddingLeft: "10px" }}>

                    {<Link href={`/golf/details/${details[0].roundId + +1}`}>
                        Next round
                    </Link>}
                </span>
            </div>
        )
}
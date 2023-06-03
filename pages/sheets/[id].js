import { groupBy, distinct } from '../../lib/utils';
import { getGoogleSheetRange } from '../../lib/googleapi';

export async function getServerSideProps({ params }) {


    const id = params.id;
    const range = `Class Data!A2:E${id}`;
    const data = await getGoogleSheetRange(process.env.SHEET_ID, range)

    return {
        props: {
            data
        }
    }
}

export default function Golf({ data }) {
    const classes = distinct(data.map(r => r[4]))
    const allclasses = data.map(r => r[4])
    const mappedClasses = groupBy(allclasses, i => i)
    const genders = distinct(data.map(r => r[1]))
    const states = distinct(data.map(r => r[3]))
    const mappedStates = groupBy(data.map(r => r[3]), i => i)

    return (
        <div>
            There are {classes.length} classes: {classes.join(',')} <br />
            There are {genders.length} genders: {genders.join(',')} <br />
            There are {states.length} states: {states.join(',')} <br />
            <ul>

                {[...mappedClasses.keys()].map(k => (
                    <li key={k}>{k} : {mappedClasses.get(k).length}</li>
                ))}
            </ul>
            <ul>

                {[...mappedStates.keys()].map(k => (
                    <li key={k}>{k} : {mappedStates.get(k).length}</li>
                ))}
            </ul>
            <table>
                <thead>
                    <tr> <th>Name</th><th>Gender</th><th>State</th><th>Class</th></tr>
                </thead>
                <tbody>
                    {data.map((r) => (
                        <tr key={r[0]}>
                            <td>{r[0]}</td>
                            <td>{r[1]}</td>
                            <td>{r[3]}</td>
                            <td>{r[4]}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>)

}
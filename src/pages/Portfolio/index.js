import "./styles.sass"
import { CardSlider } from "../../components/CardSlider"
import { gql, useQuery } from "@apollo/client"

const GET_PROJECTS_QUERY = gql`
    query {
        projects {
            id
            description
            techs
            title
            images {
                id
                url
            }
        }
    }
`

export const Portfolio = () => {
    const { loading, error, data } = useQuery(GET_PROJECTS_QUERY)

    if (loading) return 'Loading...';
    if (error) return `Error! ${error.message}`;

    return (
        <main>
            <div className="portfolio">
                {data.projects && <CardSlider cards={data.projects} />}
            </div>
        </main>
    )
}
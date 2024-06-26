import { Link } from "react-router-dom";
import useFetch from "../api/get_all_recipes";
import Hero from "../components/Hero";
import Card from "../components/card";
import Layout from "../layout/Layout";
import { useNavigate } from "react-router-dom";
import Cards from "../components/allCards";


function Homepage() {
    const { data: items, loading, error } = useFetch('http://localhost:8000/recipes/')
    const navigate = useNavigate();



    if (loading) return <span>Loading...</span>
    if (error) return <span>Something went wrong...</span>

    return (
        <>
            <Layout>
                <Hero />
                <Cards items={items.slice(1,4)} />
            </Layout>


        </>
    )
}

export default Homepage
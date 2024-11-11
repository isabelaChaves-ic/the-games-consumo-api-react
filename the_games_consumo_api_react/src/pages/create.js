import Head from "next/head";
import Menu from "@/components/Menu/Menu";
import Container from "@/components/Container/index";
import CreateContent from "@/components/CreateContent/CreateContent";
import Footer from "@/components/Footer/Footer";

export default function Homepage() {
    return (
        <>
            <Head>
                <title>The Games &copy; 2024</title>
                <meta
                    name="description"
                    content="Consumo em React de uma API de Games"
                />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <main>
                <Menu />
                <Container>
                    <CreateContent />
                </Container>
                <Footer />
            </main>
        </>
    );
}

import { Header } from "../../components/Header";
import { Section } from "../../components/Section";
import { Tag } from "../../components/Tag";
import { Container } from "./styles"

export function Home() {
    return (
        <Container>
            <Header />
            <Section title="Meus filmes">
                <Tag title="Ficão Cientifica"/>
                <Tag title="Drama"/>
                <Tag title="Familia"/>
            </Section>
        </Container>
    );
}

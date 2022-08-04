import { ButtonText } from "../../components/ButtonText";
import { Header } from "../../components/Header";
import { Section } from "../../components/Section";
import { Tag } from "../../components/Tag";
import { Container, Content } from "./styles"

export function Home() {
    return (
        <Container>
            <Header />
            <main>
                <Content>
                    <ButtonText title="voltar" />
                    <Section title="Meus filmes">
                        <Tag title="Ficão Cientifica" />
                        <Tag title="Drama" />
                        <Tag title="Familia" />
                    </Section>
                </Content>
            </main>
        </Container>
    );
}

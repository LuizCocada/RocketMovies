import { Container, Content, Form } from './styles'

import { Header } from '../../components/Header'
import { ButtonText } from '../../components/ButtonText'
import { Input } from '../../components/Input'
import { TextArea } from '../../components/TextArea'
import { NoteItem } from '../../components/NoteItem'
import { Button } from '../../components/Button'

import { IoMdArrowBack } from "react-icons/io";

import {Link} from 'react-router-dom';




export function NewNote() {
    return (
        <Container>
            <Header />
            <main>
                <Content>
                    <div className="buttonBack">
                        <Link to="/">
                            <IoMdArrowBack />
                            Voltar
                        </Link>
                    </div>

                    <h1>Novo filme</h1>

                    <Form>
                        <div>
                            <Input placeholder="Título" />
                            <Input placeholder="Sua nota (de 0 a 5)" />
                        </div>

                        <TextArea placeholder="Observações" />

                        <h2>Marcadores</h2>

                        <div className='marcadores'>
                            <NoteItem value="Ficçao cientifica" />
                            <NoteItem value="drama" />
                            <NoteItem value="familia" />
                            <NoteItem placeholder="Novo marcador" isNew />
                        </div>

                        <div className='buttons'>
                            <Button title="Excluir filme"/>
                            <Button title="Salvar alterações" />
                        </div>
                    </Form>
                </Content>
            </main>
        </Container>
    )
}
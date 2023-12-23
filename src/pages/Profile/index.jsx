import { Container, Header, Content, Form } from './styles'

import { Input } from '../../components/Input';
import { ButtonText } from '../../components/ButtonText';
import { Button } from '../../components/Button';


import { IoMdArrowBack } from "react-icons/io";
import { CiCamera } from "react-icons/ci";
import { FiMail, FiUser, FiLock } from 'react-icons/fi'

import {Link} from 'react-router-dom';




export function Profile() {
    return (
        <Container>
            <Header>
                <div className="buttonBack">
                    <Link to="/">
                        <IoMdArrowBack />
                        Voltar
                    </Link>
                </div>
            </Header>

            <main>
                <Content>
                    <div className="usuario-img">
                        <img
                            src="https://github.com/LuizCocada.png"
                            alt="foto do avatar"
                        />

                        <label htmlFor='avatar'>
                            <CiCamera />

                            <input
                                id='avatar'
                                type="file"
                            />
                        </label>
                    </div>

                    <Form>
                        <Input
                            type="text"
                            placeholder="Nome"
                            icon={FiUser}
                        />
                        <Input
                            type="text"
                            placeholder="E-mail"
                            icon={FiMail}
                        />
                        <Input
                            type="password"
                            placeholder="Senha atual"
                            icon={FiLock}
                        />
                        <Input
                            type="password"
                            placeholder="Senha antiga"
                            icon={FiLock}
                        />

                        <Button title="Salvar" />
                    </Form>
                </Content>
            </main>


        </Container>
    )
}


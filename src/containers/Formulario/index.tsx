import { FormEvent, useState } from 'react'
import { UseDispatch, useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'

import { BotaoSalva, MainContainer, Titulo } from '../../styles'
import { Campo } from '../../styles'
import { Form, Opcoes, Opcao } from './styles'
import * as enums from '../../containers/utils/enums/Tarefa'
import { cadastrar } from '../../store/reducers/tarefas'

const Formulario = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const [titulo, setTitulo] = useState('')
  const [descricao, setDescricao] = useState('')
  const [prioridade, setPrioridade] = useState(enums.Prioridade.NORMAL)

  const cadastraTarefa = (evento: FormEvent) => {
    evento.preventDefault()

    dispatch(
      cadastrar({
        titulo,
        prioridade,
        descricao,
        status: enums.Status.PENDENTE
      })
    )
    navigate('/')
  }

  return (
    <MainContainer>
      <Titulo>Nouvelle tâche</Titulo>
      <Form onSubmit={cadastraTarefa}>
        <Campo
          value={titulo}
          onChange={(evento) => setTitulo(evento.target.value)}
          type="text"
          placeholder="Titre"
        />
        <Campo
          value={descricao}
          onChange={({ target }) => setDescricao(target.value)}
          as="textarea"
          placeholder="Description de la tâche"
        />
        <Opcoes>
          <p>Priorité</p>
          {Object.values(enums.Prioridade).map((prioridade) => (
            <Opcao key={prioridade}>
              <input
                value={prioridade}
                name="prioridade"
                type="radio"
                onChange={(evento) =>
                  setPrioridade(evento.target.value as enums.Prioridade)
                }
                id={prioridade}
                defaultChecked={prioridade === enums.Prioridade.NORMAL}
              />{' '}
              <label htmlFor={prioridade}>{prioridade}</label>
            </Opcao>
          ))}
        </Opcoes>

        <BotaoSalva type="submit">Registre</BotaoSalva>
      </Form>
    </MainContainer>
  )
}

export default Formulario

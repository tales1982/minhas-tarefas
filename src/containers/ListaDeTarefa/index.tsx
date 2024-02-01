import Tarefa from '../componets/Tarefa'
import { Container } from './styles'
const tarefas = [
  {
    titulo: 'Controlar maquinas',
    descricao: 'controlas as horas das maquinas',
    prioridade: 'urgente',
    status: 'pendente'
  },
  {
    titulo: 'Sopinor',
    descricao: 'Controlar vio50',
    prioridade: 'urgente',
    status: 'concluida'
  },
  {
    titulo: 'Poeckes',
    descricao: 'prepara terex',
    prioridade: 'importante',
    status: 'concluida'
  }
]

const ListaDeTarefas = () => (
  <Container>
    <p>2 tarefas marcadas como: &quot;categoria&ldquo; e &quot;termo&ldquo;</p>
    <ul>
      {tarefas.map((t) => (
        <li key={t.titulo}>
          <Tarefa
            titulo={t.titulo}
            descricao={t.descricao}
            prioridade={t.prioridade}
            status={t.status}
          />
        </li>
      ))}
    </ul>
  </Container>
)

export default ListaDeTarefas

import Tarefa from '../componets/Tarefa'
import { Container } from './styles'
const tarefas = [
  {
    titulo: 'Controlar maquinas',
    descricao: 'controlas as horas das maquinas',
    prioridade: 'importatnte',
    status: 'pendente'
  },
  {
    titulo: 'Sopinor',
    descricao: 'Controlar vio50',
    prioridade: 'importatnte',
    status: 'pendente'
  },
  {
    titulo: 'Poeckes',
    descricao: 'prepara terex',
    prioridade: 'importatnte',
    status: 'pendente'
  },
  {
    titulo: 'Mecanicos',
    descricao: 'Fazer revisao nas maquinas',
    prioridade: 'Urgente',
    status: 'concluido'
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

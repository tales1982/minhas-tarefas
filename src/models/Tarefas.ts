import * as enums from '../../src/containers/utils/enums/Tarefa'

class Tarefa {
  titulo: string
  priorité: enums.Prioridade
  status: enums.Status
  descricao: string
  id: number

  constructor(
    titulo: string,
    priorité: enums.Prioridade,
    status: enums.Status,
    descricao: string,
    id: number
  ) {
    this.titulo = titulo
    this.priorité = priorité
    this.status = status
    this.descricao = descricao
    this.id = id
  }
}

export default Tarefa

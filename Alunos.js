class Aluno{
  nome;
  notas;
  materia = [];
  estado;
  media;
  constructor(nome){
      this.nome = nome;
  }
  cursando(disciplina){
    this.materia.push(disciplina);
  }
  gerarMedia(nota1,nota2,nota3){
    let m = (nota1+nota2+nota3)/3;
    this.media = m;
    return m;
  }
  gerarEstado(media){
    let est;
    if(media>=6){
      est="Aprovado";
    }
    else if(media>=3){
      est="Recuperação"
    }
    else{
      est="Reprovado"
    }
    this.estado = est;
    return est;
  }
}
export interface EmpresaModel {
  id?: number;
  mercado: string;
  site?: any;
  razaoSocial: string;
  nomeFantasia: string;
  capitalSocial: number;
  cnpj: number;
  cnae: number;
  cnaeDescricao: string;
  email: string;
  telefone: string;
  endereco: any
  foiDeletada?: any
}

export interface EmpresaDTOModel {
  content: EmpresaModel[];
}

export interface Qsa {
  pais?: any;
  nome_socio: string;
  codigo_pais?: any;
  faixa_etaria: string;
  cnpj_cpf_do_socio: string;
  qualificacao_socio: string;
  codigo_faixa_etaria: number;
  data_entrada_sociedade: string;
  identificador_de_socio: number;
  cpf_representante_legal: string;
  nome_representante_legal: string;
  codigo_qualificacao_socio: number;
  qualificacao_representante_legal: string;
  codigo_qualificacao_representante_legal: number;
}

export interface CnaesSecundario {
  codigo: number;
  descricao: string;
}

export interface EmpresaBrasilAPI {
  uf: string;
  cep: string;
  qsa: Qsa[];
  cnpj: string;
  pais?: any;
  email?: any;
  porte: string;
  bairro: string;
  numero: string;
  ddd_fax: string;
  municipio: string;
  logradouro: string;
  cnae_fiscal: number;
  codigo_pais?: any;
  complemento: string;
  codigo_porte: number;
  razao_social: string;
  nome_fantasia: string;
  capital_social: number;
  ddd_telefone_1: string;
  ddd_telefone_2: string;
  opcao_pelo_mei?: any;
  descricao_porte: string;
  codigo_municipio: number;
  cnaes_secundarios: CnaesSecundario[];
  natureza_juridica: string;
  situacao_especial: string;
  opcao_pelo_simples?: any;
  situacao_cadastral: number;
  data_opcao_pelo_mei?: any;
  data_exclusao_do_mei?: any;
  cnae_fiscal_descricao: string;
  codigo_municipio_ibge: number;
  data_inicio_atividade: string;
  data_situacao_especial?: any;
  data_opcao_pelo_simples?: any;
  data_situacao_cadastral: string;
  nome_cidade_no_exterior: string;
  codigo_natureza_juridica: number;
  data_exclusao_do_simples?: any;
  motivo_situacao_cadastral: number;
  ente_federativo_responsavel: string;
  identificador_matriz_filial: number;
  qualificacao_do_responsavel: number;
  descricao_situacao_cadastral: string;
  descricao_tipo_de_logradouro: string;
  descricao_motivo_situacao_cadastral: string;
  descricao_identificador_matriz_filial: string;
}

export interface Endereco {
  cep: string;
  state: string;
  city: string;
  neighborhood: string;
  street: string;
  service: string;
}

export interface EnderecoDTO {
  id?: string
  cep: string;
  uf: string;
  cidade: string;
  bairro: string;
  longradouro: string;
  numero: string;
  complemento: string;
}

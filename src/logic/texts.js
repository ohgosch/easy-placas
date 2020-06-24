export const TEXTS = {
  title: 'Easy Placas',
  logoAlt: 'Logo do Easy Placas',
  loading: 'Carregando',
  auth: {
    title: 'Autenticação',
    email: {
      placeholder: 'E-mail',
    },
    password: {
      placeholder: 'Senha',
    },
    submit: 'Entrar',
    errors: {
      notAuthorized: 'Usuário ou senha incorretos. Verifique e tente novamente.',
    },
  },
  vehicles: {
    addVehicle: {
      addVehicleForm: {
        label: 'Adicionar novo veículo',
        placeholder: 'Placa',
      },
      submit: 'Adicionar',
      errors: {
        plateWrong: 'Digite uma placa válida para fazer o cadastro do veículo.',
        createPlateAPI: 'Tivemos um problema interno durante o cadastro. Tente novamente.',
      }
    },
    ListVehicles: {
      title: 'Veículos',
      deleteVehicle: (plate) => `Deletar o carro da placa ${plate}`,
      errors: {
        timeout: {
          message: 'Não foi possível buscar a lista de automóveis.',
          refresh: 'Buscar lista novamente',
        },
        empty: {
          message: 'Não há veículos cadastrados.',
        },
      },
    },
  }
};

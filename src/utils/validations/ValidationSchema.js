import * as yup from 'yup'

export const validationSchema = yup.object({
	aporteInicial: yup.number('O Aporte Inicial deve ser um número').typeError('O aporte deve ser um número').moreThan(-1,'O Aporte Inicial deve ser no mínimo ZERO').required('O Aporte Inicial é obrigatório (Mínimo: R$ 0,00'),
	aporteMensal: yup.number('O Aporte Inicial deve ser um número').typeError('O aporte deve ser um número').moreThan(-1).required('O Aporte Mensal é obrigatório (Mínimo: R$ 0,00'),
	revenu: yup.number('Aporte Inicial deve ser um número').typeError('A rentabilidade deve ser um número').moreThan(-1, 'A rentabilidade deve ser no mínimo 0%').required('Aporte Inicial é obrigatório'),
	prazo:yup.number('O Prazo deve ser um número').typeError('O prazo deve ser um número').positive('A quantidade de meses deve ser maior que Zero').integer('Apenas meses completos').required('O prazo é obrigatório'),
	ipca:yup.number('O IPCA deve ser um número').typeError('O IPCA deve ser um número').moreThan(-1, 'O valor mínimo é 0%').required('O IPCA é obrigatório (Mínimo: 0%)'),
	cdi:yup.number('O CDI deve ser um número').typeError('O CDI deve ser um número').moreThan(-1,'O valor mínimo é 0%').required('O CDI é obrigatório (Mínimo: 0%)')
})
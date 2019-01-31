# Trabalhando com Cron no NodeJS

## Dependências

- node-cron

- express

## Comandos

- Uma vez a cada 5 minutos = (\* /5 \* \* \* \*)

- Duas vezes por hora = (\* 0,30 \* \* \* \*)

- Uma vez por hora = (\* 0 \* \* \* \*)

- Duas vezes por dia = (\* 0 0,12 \* \*)

- Uma vez por dia = (\* 0 0 \* \* \*)

- Uma vez por semana = (\* 0 0 \* \* 0)

- Uma vez por mês = (\* 0 0 1 \* \*)

## Estrutura Cron

\* \* \* \* \* \*
| | | | | |_ dia da semana
| | | | |_ mês
| | | |_ dia do mês
| | |_ hora
| |_ minutos
|_ segundos

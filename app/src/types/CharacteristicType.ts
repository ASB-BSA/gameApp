export type CharacteristicStateType = {
  name: string
  conditions_parameter: 'hp'|'damage'
	conditions_value: number
	conditions_expression: '>'|'<'|'='
	to_whom: 'myself'|'all_allies'|'random_allies'|'all_enemies'|'ramdom_enemies'
	parameter: 'attack'|'defence'|'critical_rate'|'agility'|'hp'|'mp'
	happen: '+'|'-'|'='
	how_much: number
}
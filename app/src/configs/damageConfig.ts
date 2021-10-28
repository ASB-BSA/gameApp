export type damageConfigType = {
	critical_rate: number,
	critical_damage: number,
	effective: number,
	base_attack: number,
	base_defence: number,
	max_ramdom_damage: number,
	min_ramdom_damage: number
}

const damageConfig: damageConfigType = {
	critical_rate: 25, // クリティカル率(%)
	critical_damage: 1.5, // クリティカル発生時の倍率
	effective: 2, // 相性のダメージ補正
	base_attack: 10, // ダメージ計算時の攻撃補正
	base_defence: 10, // ダメージ計算時の防御補正
	max_ramdom_damage: 1.2, // ダメージ乱数最大値
	min_ramdom_damage: 0.9 // ダメージ乱数最小値
}

export default damageConfig
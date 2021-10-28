import {
	damageConfig
} from "@/configs"

const critical = (): boolean => {
	const random = Math.floor(Math.random() * 100)
	
	return random <= damageConfig.critical_rate
}

const getDamage = (atk: number, def: number): number => {
	const ramdom = (Math.random() * (damageConfig.max_ramdom_damage - damageConfig.min_ramdom_damage)) + damageConfig.min_ramdom_damage
	const damage = ((atk * damageConfig.base_attack) / (def + damageConfig.base_defence)) * Number(ramdom.toFixed(1))
	const criticalDamage = critical() ? damage*damageConfig.critical_damage : damage

	const result = Math.round(criticalDamage > 0 ? criticalDamage : 1)

	return result
}

export default getDamage
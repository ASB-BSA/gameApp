type targetType = number[]|number

const commonName = 'charactar_'

const battleEffect = async (action: 'attack'|'down' , to: targetType, from?: number) => {
  to = [to].flat() as number[]

  switch (action) {
    case 'attack':
      if (!from || to.length === 0) return
      const attacker = document.querySelector(`.${commonName}${from}`)
      
      if (!attacker) return
      
      attacker.classList.add('isAttack')

      await new Promise<void>((resolve) => {
        setTimeout(() => {
          resolve()
        }, 800)
      })

      to.forEach(e => {
        const damager = document.querySelector(`.${commonName}${e}`)
        damager?.classList.add('isDamage')
      })

      await new Promise<void>((resolve) => {
        setTimeout(() => {
          resolve()
        }, 900)
      })

      const allEffects = document.querySelectorAll('.isAttack, .isDamage')

      allEffects.forEach(e => {
        e.classList.remove('isAttack')
        e.classList.remove('isDamage')
      })

      break
    
    case 'down':
      if (to.length === 0) return
      to.forEach(e => {
        const target = document.querySelector(`.${commonName}${e}`)
        target?.classList.add('isDown')
      })
      
      break
  }
}

export default battleEffect
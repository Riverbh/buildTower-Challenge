function buildTower(levels){
   let tower = []
   let spaces = 0
    for(let i = levels; i > 0; i--){
       tower.push(" ".repeat(spaces)+"*".repeat(i)+"*".repeat(i-1)+" ".repeat(spaces))
       spaces++
    }
    return tower.reverse()
}

console.log(buildTower(6))
 
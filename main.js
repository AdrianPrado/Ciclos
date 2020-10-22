
class Main {


    factor (n) {
        var t = 1

        for (let i=1; i<=n; i++) {
            t = t * i
        }
        return t
    }

    primero(e){
        let t = 1
        for (let i=1;i<=e;i++){
            t += (1/this.factor(i))
        }
        return t
        }

    segundo(e,x){
        let t = 1
        for (let i=1;i<=e;i++){
            t += (Math.pow(x,i)/this.factor(i))
        }
        return t
        }
}

let start = new Main()

console.log(start.primero(5))
console.log(start.segundo(5,1))

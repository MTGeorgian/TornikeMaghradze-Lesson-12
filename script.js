// I
    let lekvi = [5, 25, 89, 120, 36]
        lekvi.push ('javascript ', 'python')
            console.log(lekvi);
        lekvi.unshift ('html ', 'css')
            console.log(lekvi);
        lekvi.forEach(function(lomisa){
            console.log(lomisa);
        })
        lekvi.pop()
        lekvi.shift()
            console.log(lekvi);
        lekvi.forEach(sworia => {
            console.log(sworia);
        }) 
// II
    let gamadidebel = ['ფორთოხალი', 'ბანანი', 'მსხალი']    
        gamadidebel.forEach(shushashi =>{
            console.log(shushashi);
        })
        gamadidebel.push('ვაშლი', 'ანანასი')
            console.log(gamadidebel);
        gamadidebel.unshift('საზამთრო')
            console.log(gamadidebel);
        gamadidebel.forEach(s =>{
            console.log(s);
        })
        gamadidebel.splice(2, 0, 'მანგო')
            console.log(gamadidebel);
        gamadidebel.shift()
        gamadidebel.pop()
            console.log(gamadidebel);
        gamadidebel.forEach(sh =>{
            console.log(sh);
        })
// III
        let it = {
            the: 'beatles',
            song: 'yesterday',
            est: 1960
        };
        Object.keys(it).forEach(b => {
            console.log(b);
        })
        let lfc = {
            est: 1892,
            name: 'liverpool',
            stadium: 'anfield'
        }
        Object.values(lfc).forEach(l => {
            console.log(l);
        })
// V
        let array = [12, 25, 3, 6, 8, 14, 7, 23];
        let newArray = array.map(k => k / 3); 
            console.log(newArray);
// VI
        let sunShine = ["hello", 125, "javascript", "html", 43, "css", "scss", "bootstrap", 88, 59, "python"];
        let starsShine = sunShine.filter(t => t > 0);
            console.log(starsShine);
       
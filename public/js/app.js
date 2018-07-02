let app = new Vue({
    el: '#app',
    data: {
        patterns: [{
            id: 'baconstrips',
            title: 'Bacon Strips',
            rotate: 45,
            font: 'Arial',
            fontSize: '16',
            x: '0',
            y: '16',
            text: '‖',
            colorA: '#FFFFFF',
            colorB: '#000000',
            svg: false
        }, {
            id: 'mice',
            title: 'Mice',
            rotate: 0,
            font: 'Arial',
            fontSize: '16',
            x: '0',
            y: '8',
            text: '∵',
            colorA: '#FFFFFF',
            colorB: '#000000',
            svg: false
        }, {
            id: 'grid',
            title: 'Grid',
            rotate: 0,
            font: 'Arial',
            fontSize: '32',
            x: '-5',
            y: '16',
            text: '⊞',
            colorA: '#FFFFFF',
            colorB: '#000000',
            svg: false
        }, {
            id: 'dots',
            title: 'Dots',
            rotate: 0,
            font: 'Arial',
            fontSize: '32',
            x: '-2',
            y: '16',
            text: '⋰',
            colorA: '#FFFFFF',
            colorB: '#000000',
            svg: false
        }, {
            id: 'crosshair',
            title: 'Crosshair',
            rotate: 0,
            font: 'Arial',
            fontSize: '32',
            x: '-1',
            y: '16',
            text: '⌖',
            colorA: '#FFFFFF',
            colorB: '#000000',
            svg: false
        }, {
            id: 'blockface',
            title: 'Block Face',
            rotate: 45,
            font: 'Arial',
            fontSize: '128',
            x: '-1',
            y: '32',
            text: '▒',
            colorA: '#FFFFFF',
            colorB: '#000000',
            svg: false
        }, {
            id: 'picket',
            title: 'Picket',
            rotate: 45,
            font: 'Arial',
            fontSize: '32',
            x: '0',
            y: '12',
            text: '╬',
            colorA: '#FFFFFF',
            colorB: '#000000',
            svg: false
        }, {
            id: 'tongues',
            title: 'Tongues',
            rotate: 45,
            font: 'Arial',
            fontSize: '16',
            x: '0',
            y: '8',
            text: '◯',
            colorA: '#FFFFFF',
            colorB: '#000000',
            svg: false
        }, {
            id: 'stars',
            title: 'Stars',
            rotate: 45,
            font: 'Arial',
            fontSize: '18',
            x: '0',
            y: '14',
            text: '★',
            colorA: '#FFFFFF',
            colorB: '#000000',
            svg: false
        }, {
            id: 'stars2',
            title: 'Stars 2',
            rotate: 45,
            font: 'Arial',
            fontSize: '18',
            x: '0',
            y: '14',
            text: '☆',
            colorA: '#FFFFFF',
            colorB: '#000000',
            svg: false
        }, {
            id: 'stars3',
            title: 'Stars 3',
            rotate: 45,
            font: 'Arial',
            fontSize: '20',
            x: '0',
            y: '14',
            text: '✶',
            colorA: '#FFFFFF',
            colorB: '#000000',
            svg: false
        }, {
            id: 'seismo',
            title: 'Seismo',
            rotate: 45,
            font: 'Arial',
            fontSize: '16',
            x: '-4',
            y: '16',
            text: '⟿',
            colorA: '#FFFFFF',
            colorB: '#000000',
            svg: false
        }, {
            id: 'nugget',
            title: 'Nugget',
            rotate: 0,
            font: 'Arial',
            fontSize: '42',
            x: '-8',
            y: '18',
            text: '⧄',
            colorA: '#FFFFFF',
            colorB: '#000000',
            svg: false
        }, {
            id: 'hailstorm',
            title: 'Hailstorm',
            rotate: -45,
            font: 'Arial',
            fontSize: '16',
            x: '0',
            y: '16',
            text: '⧫',
            colorA: '#FFFFFF',
            colorB: '#000000',
            svg: false
        }, {
            id: 'poundit',
            title: 'Pound It',
            rotate: 45,
            font: 'Arial',
            fontSize: '16',
            x: '0',
            y: '16',
            text: '⨳',
            colorA: '#FFFFFF',
            colorB: '#000000',
            svg: false
        }, {
            id: 'peaks',
            title: 'Peaks',
            rotate: 45,
            font: 'Arial',
            fontSize: '20',
            x: '0',
            y: '16',
            text: '⩕',
            colorA: '#FFFFFF',
            colorB: '#000000',
            svg: false
        }, {
            id: 'pokeh',
            title: 'Pokeh',
            rotate: 45,
            font: 'Arial',
            fontSize: '20',
            x: '0',
            y: '16',
            text: '⦼',
            colorA: '#FFFFFF',
            colorB: '#000000',
            svg: false
        }, {
            id: 'hillside',
            title: 'Hillside',
            rotate: 45,
            font: 'Arial',
            fontSize: '20',
            x: '-5',
            y: '16',
            text: '⨌',
            colorA: '#FFFFFF',
            colorB: '#000000',
            svg: false
        }, {
            id: 'uuu',
            title: 'Uuu',
            rotate: 45,
            font: 'Arial',
            fontSize: '20',
            x: '-3',
            y: '16',
            text: '⫐',
            colorA: '#FFFFFF',
            colorB: '#000000',
            svg: false
        }, {
            id: 'chained',
            title: 'Chained',
            rotate: 0,
            font: 'Arial',
            fontSize: '32',
            x: '-3',
            y: '14',
            text: '⫘',
            colorA: '#FFFFFF',
            colorB: '#000000',
            svg: false
        }, {
            id: 'silence',
            title: 'Silence',
            rotate: -45,
            font: 'Arial',
            fontSize: '32',
            x: '-3',
            y: '14',
            text: '𝔰',
            colorA: '#FFFFFF',
            colorB: '#000000',
            svg: false
        }, {
            id: 'diag',
            title: 'Diag',
            rotate: -45,
            font: 'Arial',
            fontSize: '32',
            x: '-3',
            y: '2',
            text: 'Δ',
            colorA: '#FFFFFF',
            colorB: '#000000',
            svg: false
        }, {
            id: 'smallpox',
            title: 'Smallpox',
            rotate: -45,
            font: 'Arial',
            fontSize: '32',
            x: '0',
            y: '32',
            text: '˚',
            colorA: '#FFFFFF',
            colorB: '#000000',
            svg: false
        }, {
            id: 'jenga',
            title: 'Jenga',
            rotate: 0,
            font: 'Arial',
            fontSize: '16',
            x: '0',
            y: '12',
            text: '▚',
            colorA: '#000000',
            colorB: '#FFFFFF',
            svg: false
        }, {
            id: 'rainstorm',
            title: 'Rainstorm',
            rotate: 45,
            font: 'Arial',
            fontSize: '8',
            x: '0',
            y: '0',
            text: '▉',
            colorA: '#000000',
            colorB: '#FFFFFF',
            svg: false
        }, {
            id: 'veryoriginal',
            title: 'Very Original',
            rotate: 0,
            font: 'Arial',
            fontSize: '30',
            x: '-15',
            y: '20',
            text: '◼',
            colorA: '#000000',
            colorB: '#FFFFFF',
            svg: false
        }, {
            id: 'mailroom',
            title: 'Mail Room',
            rotate: 0,
            font: 'Arial',
            fontSize: '32',
            x: '0',
            y: '16',
            text: '❑',
            colorA: '#000000',
            colorB: '#FFFFFF',
            svg: false
        }, {
            id: 'coupons',
            title: 'Coupons',
            rotate: 0,
            font: 'Arial',
            fontSize: '32',
            x: '0',
            y: '16',
            text: '⬚',
            colorA: '#000000',
            colorB: '#FFFFFF',
            svg: false
        }, {
            id: 'horsearmy',
            title: 'Horse Army',
            rotate: 45,
            font: 'Arial',
            fontSize: '32',
            x: '-2',
            y: '16',
            text: '♘',
            colorA: '#000000',
            colorB: '#FFFFFF',
            svg: false
        }, {
            id: 'sleepy',
            title: 'Sleepy',
            rotate: 45,
            font: 'Arial',
            fontSize: '32',
            x: '0',
            y: '16',
            text: '৸',
            colorA: '#000000',
            colorB: '#FFFFFF',
            svg: false
        }, {
            id: 'controlroom',
            title: 'Control Room',
            rotate: 0,
            font: 'Arial',
            fontSize: '16',
            x: '2',
            y: '16',
            text: '▣',
            colorA: '#000000',
            colorB: '#FFFFFF',
            svg: false
        }, {
            id: 'sprout',
            title: 'Sprout',
            rotate: 45,
            font: 'Arial',
            fontSize: '32',
            x: '-3',
            y: '16',
            text: 'ℬ',
            colorA: '#FFFFFF',
            colorB: '#000000',
            svg: false
        }, {
            id: 'stalker',
            title: 'Stalker',
            rotate: 45,
            font: 'Arial',
            fontSize: '32',
            x: '0',
            y: '18',
            text: '↟',
            colorA: '#FFFFFF',
            colorB: '#000000',
            svg: false
        }, {
            id: 'barrier',
            title: 'Barrier',
            rotate: 45,
            font: 'Arial',
            fontSize: '32',
            x: '0',
            y: '16',
            text: '∔',
            colorA: '#FFFFFF',
            colorB: '#000000',
            svg: false
        }, {
            id: 'marbles',
            title: 'Marbles',
            rotate: 45,
            font: 'Arial',
            fontSize: '32',
            x: '-3',
            y: '16',
            text: '⧃',
            colorA: '#FFFFFF',
            colorB: '#000000',
            svg: false
        }, {
            id: 'antique',
            title: 'Antique',
            rotate: 45,
            font: 'Arial',
            fontSize: '32',
            x: '0',
            y: '18',
            text: '✠',
            colorA: '#FFFFFF',
            colorB: '#000000',
            svg: false
        }, {
            id: 'relax',
            title: 'Relax',
            rotate: 45,
            font: 'Arial',
            fontSize: '32',
            x: '-10',
            y: '14',
            text: '↺',
            colorA: '#FFFFFF',
            colorB: '#000000',
            svg: false
        }, {
            id: 'goatarmy',
            title: 'Goat Army',
            rotate: 25,
            font: 'Arial',
            fontSize: '32',
            x: '-4',
            y: '16',
            text: '𝔇',
            colorA: '#FFFFFF',
            colorB: '#000000',
            svg: false
        }, {
            id: 'citymap',
            title: 'City Map',
            rotate: 45,
            font: 'Arial',
            fontSize: '16',
            x: '0',
            y: '16',
            text: '⊡',
            colorA: '#FFFFFF',
            colorB: '#000000',
            svg: false
        }, {
            id: 'shortstraw',
            title: 'Short Straw',
            rotate: 45,
            font: 'Arial',
            fontSize: '16',
            x: '0',
            y: '16',
            text: 'Ξ',
            colorA: '#FFFFFF',
            colorB: '#000000',
            svg: false
        }, {
            id: 'shields',
            title: 'Shields',
            rotate: 45,
            font: 'Arial',
            fontSize: '28',
            x: '-3',
            y: '16',
            text: 'Ω',
            colorA: '#FFFFFF',
            colorB: '#000000',
            svg: false
        },{
            id: 'crows',
            title: 'Crows',
            rotate: 45,
            font: 'Arial',
            fontSize: '28',
            x: '-3',
            y: '16',
            text: '¶',
            colorA: '#FFFFFF',
            colorB: '#000000',
            svg: false
        },{
            id: 'marrow',
            title: 'Marrow',
            rotate: 65,
            font: 'Arial',
            fontSize: '32',
            x: '0',
            y: '8',
            text: 'Ɣ',
            colorA: '#FFFFFF',
            colorB: '#000000',
            svg: false
        },{
            id: 'saints',
            title: 'Saints',
            rotate: 45,
            font: 'Arial',
            fontSize: '32',
            x: '-2',
            y: '16',
            text: 'ƕ',
            colorA: '#FFFFFF',
            colorB: '#000000',
            svg: false
        },{
            id: 'range',
            title: 'Range',
            rotate: 60,
            font: 'Arial',
            fontSize: '23',
            x: '0',
            y: '10',
            text: 'Ʃ',
            colorA: '#FFFFFF',
            colorB: '#000000',
            svg: false
        },{
            id: 'seeds',
            title: 'Seeds',
            rotate: 45,
            font: 'Arial',
            fontSize: '50',
            x: '-14',
            y: '4',
            text: 'ƾ',
            colorA: '#FFFFFF',
            colorB: '#000000',
            svg: false
        },{
            id: 'corporate',
            title: 'Corporate',
            rotate: 45,
            font: 'Arial',
            fontSize: '50',
            x: '-14',
            y: '4',
            text: 'Ɏ',
            colorA: '#FFFFFF',
            colorB: '#000000',
            svg: false
        },{
            id: 'particles',
            title: 'Particles',
            rotate: 45,
            font: 'Arial',
            fontSize: '32',
            x: '-8',
            y: '20',
            text: 'έ',
            colorA: '#FFFFFF',
            colorB: '#000000',
            svg: false
        },{
            id: 'sleepy2',
            title: 'Sleepy 2',
            rotate: 45,
            font: 'Arial',
            fontSize: '20',
            x: '4',
            y: '12',
            text: 'Ϟ',
            colorA: '#FFFFFF',
            colorB: '#000000',
            svg: false
        },{
            id: 'sleet',
            title: 'Sleet',
            rotate: 45,
            font: 'Arial',
            fontSize: '20',
            x: '4',
            y: '18',
            text: 'Џ',
            colorA: '#FFFFFF',
            colorB: '#000000',
            svg: false
        },{
            id: 'acres',
            title: 'Acres',
            rotate: 45,
            font: 'Arial',
            fontSize: '20',
            x: '4',
            y: '18',
            text: '༗',
            colorA: '#FFFFFF',
            colorB: '#000000',
            svg: false
        },{
            id: 'pain',
            title: 'Pain',
            rotate: 0,
            font: 'Arial',
            fontSize: '20',
            x: '0',
            y: '12',
            text: '␥',
            colorA: '#FFFFFF',
            colorB: '#000000',
            svg: false
        },{
            id: 'temple',
            title: 'Temple',
            rotate: 0,
            font: 'Arial',
            fontSize: '32',
            x: '-6',
            y: '20',
            text: '⎈',
            colorA: '#FFFFFF',
            colorB: '#000000',
            svg: false
        },{
            id: 'easypar',
            title: 'Easy Par',
            rotate: 20,
            font: 'Arial',
            fontSize: '16',
            x: '2',
            y: '25',
            text: '⎷',
            colorA: '#FFFFFF',
            colorB: '#000000',
            svg: false
        },{
            id: 'noodles',
            title: 'Noodles',
            rotate: 20,
            font: 'Arial',
            fontSize: '16',
            x: '2',
            y: '10',
            text: '⌇',
            colorA: '#FFFFFF',
            colorB: '#000000',
            svg: false
        },{
            id: 'community',
            title: 'Community',
            rotate: 0,
            font: 'Arial',
            fontSize: '20',
            x: '0',
            y: '12',
            text: '⌂',
            colorA: '#FFFFFF',
            colorB: '#000000',
            svg: false
        },{
            id: 'caverns',
            title: 'Caverns',
            rotate: 25,
            font: 'Arial',
            fontSize: '20',
            x: '0',
            y: '16',
            text: '⎔',
            colorA: '#FFFFFF',
            colorB: '#000000',
            svg: false
        },{
            id: 'digital',
            title: 'Digital',
            rotate: 25,
            font: 'Arial',
            fontSize: '20',
            x: '0',
            y: '16',
            text: '▓',
            colorA: '#FFFFFF',
            colorB: '#000000',
            svg: false
        },{
            id: 'electric',
            title: 'Electric',
            rotate: 90,
            font: 'Arial',
            fontSize: '25',
            x: '0',
            y: '16',
            text: '⑀',
            colorA: '#FFFFFF',
            colorB: '#000000',
            svg: false
        },{
            id: 'overcast',
            title: 'Overcast',
            rotate: 45,
            font: 'Arial',
            fontSize: '25',
            x: '-5',
            y: '10',
            text: '◓',
            colorA: '#FFFFFF',
            colorB: '#000000',
            svg: false
        },{
            id: 'amulet',
            title: 'Amulet',
            rotate: 45,
            font: 'Arial',
            fontSize: '25',
            x: '-5',
            y: '10',
            text: '◙',
            colorA: '#FFFFFF',
            colorB: '#000000',
            svg: false
        },{
            id: 'sliced',
            title: 'Sliced',
            rotate: 65,
            font: 'Arial',
            fontSize: '35',
            x: '0',
            y: '10',
            text: '◉',
            colorA: '#FFFFFF',
            colorB: '#000000',
            svg: false
        },{
            id: 'windows',
            title: 'Windows',
            rotate: 65,
            font: 'Arial',
            fontSize: '25',
            x: '0',
            y: '10',
            text: '☗',
            colorA: '#FFFFFF',
            colorB: '#000000',
            svg: false
        },{
            id: 'fortress',
            title: 'Fortress',
            rotate: 90,
            font: 'Arial',
            fontSize: '25',
            x: '0',
            y: '12',
            text: '♜',
            colorA: '#FFFFFF',
            colorB: '#000000',
            svg: false
        },{
            id: 'tails',
            title: 'Tails',
            rotate: 45,
            font: 'Arial',
            fontSize: '20',
            x: '-10',
            y: '16',
            text: '✧',
            colorA: '#FFFFFF',
            colorB: '#000000',
            svg: false
        },{
            id: 'bricks',
            title: 'Bricks',
            rotate: 0,
            font: 'Arial',
            fontSize: '28',
            x: '-6',
            y: '14',
            text: '⻡',
            colorA: '#FFFFFF',
            colorB: '#000000',
            svg: false
        },{
            id: 'olives',
            title: 'Olives',
            rotate: 55,
            font: 'Arial',
            fontSize: '20',
            x: '0',
            y: '14',
            text: '❍',
            colorA: '#FFFFFF',
            colorB: '#000000',
            svg: false
        },{
            id: 'friends',
            title: 'Friends',
            rotate: 45,
            font: 'Arial',
            fontSize: '20',
            x: '2',
            y: '16',
            text: '⚉',
            colorA: '#FFFFFF',
            colorB: '#000000',
            svg: false
        },{
            id: 'surrender',
            title: 'Surrender',
            rotate: 25,
            font: 'Arial',
            fontSize: '20',
            x: '2',
            y: '16',
            text: '⚐',
            colorA: '#FFFFFF',
            colorB: '#000000',
            svg: false
        },{
            id: 'kabuto',
            title: 'Kabuto',
            rotate: 45,
            font: 'Arial',
            fontSize: '20',
            x: '0',
            y: '12',
            text: '⚕',
            colorA: '#FFFFFF',
            colorB: '#000000',
            svg: false
        },{
            id: 'bloom',
            title: 'Bloom',
            rotate: 0,
            font: 'Arial',
            fontSize: '10',
            x: '0',
            y: '10',
            text: '⚘',
            colorA: '#FFFFFF',
            colorB: '#000000',
            svg: false
        },{
            id: 'common',
            title: 'Common',
            rotate: 45,
            font: 'Arial',
            fontSize: '22',
            x: '0',
            y: '12',
            text: '⚭',
            colorA: '#FFFFFF',
            colorB: '#000000',
            svg: false
        },{
            id: 'doubloons',
            title: 'Doubloons',
            rotate: 45,
            font: 'Arial',
            fontSize: '16',
            x: '0',
            y: '16',
            text: 'ↂ',
            colorA: '#FFFFFF',
            colorB: '#000000',
            svg: false
        },{
            id: 'escalator',
            title: 'Escalator',
            rotate: 45,
            font: 'Arial',
            fontSize: '32',
            x: '0',
            y: '12',
            text: '⟰',
            colorA: '#FFFFFF',
            colorB: '#000000',
            svg: false
        },{
            id: 'acuteone',
            title: 'Acute One',
            rotate: 0,
            font: 'Arial',
            fontSize: '32',
            x: '-8',
            y: '15',
            text: '⟁',
            colorA: '#FFFFFF',
            colorB: '#000000',
            svg: false
        },{
            id: 'timeless',
            title: 'Timeless',
            rotate: 0,
            font: 'Arial',
            fontSize: '22',
            x: '-2',
            y: '14',
            text: '⧗',
            colorA: '#FFFFFF',
            colorB: '#000000',
            svg: false
        },{
            id: 'malice',
            title: 'Malice',
            rotate: 10,
            font: 'Arial',
            fontSize: '22',
            x: '-12',
            y: '16',
            text: '☃',
            colorA: '#FFFFFF',
            colorB: '#000000',
            svg: false
        },{
            id: 'pollen',
            title: 'Pollen',
            rotate: 45,
            font: 'Arial',
            fontSize: '22',
            x: '0',
            y: '16',
            text: '✺',
            colorA: '#FFFFFF',
            colorB: '#000000',
            svg: false
        },{
            id: 'direction',
            title: 'Direction',
            rotate: 45,
            font: 'Arial',
            fontSize: '22',
            x: '0',
            y: '16',
            text: '➲',
            colorA: '#FFFFFF',
            colorB: '#000000',
            svg: false
        },{
            id: 'blueprints',
            title: 'Blueprints',
            rotate: 45,
            font: 'Arial',
            fontSize: '22',
            x: '0',
            y: '16',
            text: '❖',
            colorA: '#FFFFFF',
            colorB: '#000000',
            svg: false
        }]
    },
    mounted() {

        let that = this;
        this.patterns.forEach(function(pattern) {
            let min = 10
            let max = 50
            let color1 = Math.floor(Math.random() * 360)
            let offset = 30
            let flexZone = Math.floor(Math.random() * 30)
            let color2 = color1 + offset + flexZone
            let coinToss = Math.random() > .5
            let colorA = getColor(`hsl(${color1}, 100%, ${coinToss ? min : max}%)`)
            let colorB = getColor(`hsl(${color2}, 100%, ${coinToss ? max : min}%)`)

            console.log(colorA, colorB);

            pattern.colorA = colorA;
            pattern.colorB = colorB;

            let patternEl = document.querySelector('#' + pattern.id)
            patternEl.setAttribute('patternTransform', 'rotate(' + pattern.rotate + ')')
            document.querySelector('#' + pattern.id + '_container input.colorA').value = colorB;
            document.querySelector('#' + pattern.id + '_container input.colorB').value = colorA;
            that.$nextTick(function() {
                pattern.svg = '<svg>' + patternEl.parentNode.parentNode.innerHTML + '</svg>';
            })
        })
    },
    methods: {
        updateColorA(pattern, event) {
            console.log(event.target.value)
            pattern.colorA = event.target.value;
            pattern.svg = '<svg>' + document.querySelector('#' + pattern.id).parentNode.parentNode.innerHTML + '</svg>';
        },
        updateColorB(pattern, event) {
            pattern.colorB = event.target.value;
            pattern.svg = '<svg>' + document.querySelector('#' + pattern.id).parentNode.parentNode.innerHTML + '</svg>';
        }
    }
})

// Color generator by Tom Hodgins @innovati
function getColor(c) {
    let canvas = document.createElement('canvas')
    canvas.width = canvas.height = 1
    let ctx = canvas.getContext('2d')
    ctx.fillStyle = c
    ctx.fillRect(0, 0, 1, 1)
    let [r, g, b, a] = ctx.getImageData(0, 0, 1, 1).data
    let newColor = '#' +
        r.toString(16).padStart(2, 0) +
        g.toString(16).padStart(2, 0) +
        b.toString(16).padStart(2, 0)
    return newColor;
}
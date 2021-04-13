import Highway from '@dogstudio/highway';
import gsap from 'gsap'

class Fade extends Highway.Transition{

    in({ from, to, done }) {
        const Tl = gsap.timeline({
        })
        Tl.fromTo(to, { y: 50, autoAlpha: 0 }, {
            y: 0, autoAlpha: 1, onComplete: function () {
                from.remove()
                done()
        }} )
    }   
    out({ from, done }) {
   
        done()
    }
}

export default Fade;
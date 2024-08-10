import notificationSound from "/45.mp3"
export default function formatTime(time){
    const format = (value) => (value < 10 ? `0${value}` : value)
    const minutes = Math.floor(time / 60)
    const seconds = time % 60
 
    return `${format(minutes)}:${format(seconds)}`
 }

 export const PlayNotificationSound = () => {
    const audio = new Audio(notificationSound)
    return audio.play()
 }

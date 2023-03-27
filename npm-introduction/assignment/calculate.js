import { people } from "./data.js"

export const getToppers = () => {
    return people.filter(person => {
        const totalMarks = person.marks.reduce((sum, mark) => {
            return sum + mark;
        }, 0)
        return (totalMarks / 3) > 80;
    })
}
export const TASKS_ARR = []


for (let i = 0; i < 10; i++) {
    TASKS_ARR.push({ isDone: Math.random() < 0.5, taskName: `task_${i}` })
}
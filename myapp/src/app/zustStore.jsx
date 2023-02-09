import create from 'zustand';

import {devtools, persist}  from 'zustand/middleware';


const zusStore = (set) => ({
    courses: [],
    addCourse: (course) => {
        set((state) => ({
            courses: [course, ...state.courses],
        }))
    },
    removeCourse: (courseId) => {
        set((state) => ({
            courses: state.courses.filter((c) => c.id !== courseId)
        }))
    },
    toggleCourseStatus: (courseId) => {
        set((state) => ({
            courses: state.course.map((course) => course.id === courseId ? {...course, completed : !course.completed }: course)
        }))
    }
})

const useZusStore = create(
    devtools(
        persist(zusStore, {
            name: "Courses",
        })
    )
)

export default useZusStore;
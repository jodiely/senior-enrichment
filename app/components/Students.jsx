import React from 'react'
import { Link } from 'react-router'

export default function Students(props) {
    console.log('student props', props)
    const students = props.students;

    return (
        <div>
            <h3>Students</h3>
            <table className="list-group">
                <thead>
                    <tr>
                        <th>ID#</th>
                        <th>Name</th>
                        <th>Campus</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        students.map(student => {
                            return (
                                <tr key={student.id}>
                                    <td>{student.id}</td>
                                    <td>{student.name}</td>
                                    <td>{student.campusId}</td>
                                </tr>
                            );
                        })
                    }
                </tbody>
            </table>
        </div>
            )
}
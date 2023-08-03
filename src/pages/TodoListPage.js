import React from 'react';
import MainLayout from '../layout/MainLayout';
import TodoCategory from '../components/TodoCategory';

const TodoListPage = (props) => {
    return (
        <>
            <MainLayout>
                <TodoCategory title='Home' />
                <TodoCategory title='Work' />
                <TodoCategory title='School' />
            </MainLayout>
        </>
    );
}

export default TodoListPage;
import { PageHeader } from 'antd'
import React from 'react'

export const Header = () => {
    return (
        <PageHeader
            className="site-page-header"
            onBack={() => null}
            backIcon={false}
            title="Title"
            subTitle="This is a subtitle"
        />
    )
}

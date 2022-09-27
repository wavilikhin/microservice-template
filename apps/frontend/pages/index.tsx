import type { NextPage } from 'next'
import { Header } from '@common/components/Header'
import { Avatar, Button, Card, Col, Input, List, Row, Space, Typography } from 'antd'
const { TextArea } = Input;
const { Title } = Typography
import { grey } from '@ant-design/colors';
import { usePosts } from 'hooks/usePosts';

const Home: NextPage = () => {
  const { isLoading, isError, isFetched, data } = usePosts()

  if (isError) {
    return (
      <div>Error</div>
    )
  }

  return (
    <>
      <Header />
      <Row gutter={100} justify='center'>
        <Col span={8}>
          {isLoading && <span>Loading...</span>}

          {isFetched && (
            <List
              header={<Title level={3}>Recent posts:</Title>}
              itemLayout="horizontal"
              dataSource={data}
              renderItem={item => (
                <List.Item
                  actions={[<a key="list-loadmore-edit">edit</a>, <a key="list-loadmore-more">remove</a>]}>
                  <List.Item.Meta
                    avatar={<Avatar src="https://joeschmoe.io/api/v1/random" />}
                    title={<a href="https://ant.design">{item.title}</a>}
                    description={item.content}
                  />
                </List.Item>
              )}
            />
          )}
        </Col>

        <Col span={6} style={{ padding: '60px' }}>
          <Card style={{ width: 300 }}>
            <Space direction='vertical' size='large'>
              <>
                <Space direction='vertical' size='middle'>
                  <Title level={3} className='geekblue-2' style={{ color: grey[6] }}>Create new post</Title>
                  <Input placeholder='Title' />
                  <TextArea rows={4} placeholder='Content' />
                </Space>
              </>
              <Button type="primary" size='middle'>
                Create post
              </Button>
            </Space>
          </Card>
        </Col>
      </Row>
    </>
  )
}

export default Home
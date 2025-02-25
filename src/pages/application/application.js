import {Button, Input, Space, Typography} from "antd";

const { TextArea } = Input;
const { Text } = Typography;

export const Application = () => {
    return (
        <>
        <Typography.Title level={2}>Запись к врачу</Typography.Title>
        <form action="">
            <Space direction="vertical" size="large" style={{display: 'flex'}}>
                <Space direction="vertical" size="middle" style={{display: 'flex'}}>
                    <div>
                        <Text strong>ФИО</Text>
                        <Input placeholder="Введите ваше ФИО"></Input>
                    </div>
                    <div>
                        <Text strong>Номер телефона</Text>
                        <Input placeholder="Введите ваш номер телефона"></Input>
                    </div>

                    <div>
                        <Text strong>Опишите вашу проблему</Text>
                        <TextArea rows={4} placeholder="Ваша проблема..."></TextArea>
                    </div>
                </Space>
                <Button type="primary" block>Отправить</Button>
            </Space>
        </form>

        </>
    )
}
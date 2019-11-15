import React from 'react';
import { Input, Button } from 'antd';
const { TextArea } = Input;
export default class Complaint extends React.Component {
    render() {
        return (
            <>
                <TextArea rows={4} />
                <Button type="primary" block>
                    Primary
                </Button>
                <Button block>Default</Button>
                <Button type="dashed" block>
                    Dashed
                </Button>
                <Button type="danger" block>
                    Danger
                </Button>
                <Button type="link" block>
                    Link
                </Button>
            </>
        )
    }
}
import React, {useState} from 'react'
import Layout from '../pages/Layout'
import Button from "../shared/button";
import Input from '../shared/Input'

/** Test용 페이지 */
const Test = () => {
    const [value, setValue] = useState('');
  return (
        <Layout>
            <Button icon="search">버튼이올시다</Button>
            <Input
                value={value}
                name="value"
                type="text"
                onChange={(e) => setValue(e.target.value)}
                placeholder="플레이스홀더"
            />
        </Layout>
  )
}

export default Test
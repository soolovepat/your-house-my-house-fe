import React, {useState} from 'react'

import Input from '../shared/input'
import Layout from './layout';
import Button from '../shared/button';


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
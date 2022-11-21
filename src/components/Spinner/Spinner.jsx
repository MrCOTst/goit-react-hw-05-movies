import { ThreeDots } from 'react-loader-spinner';
import styled from 'styled-components';

export default function Spinner() {
    return (
        <Loader>
            <ThreeDots
            height="80"
            width="80"
            radius="9"
            color="#4fa94d"
            ariaLabel="three-dots-loading"
            wrapperStyle={{}}
            wrapperClassName=""
            visible={true}
            margin="auto"
          />

        </Loader>
    )
}

const Loader = styled.div`
  display: flex;
  justify-content: center;
`;
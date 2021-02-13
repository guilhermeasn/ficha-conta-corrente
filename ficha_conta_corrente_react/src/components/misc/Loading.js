
export default function Loading(props) {
    const theme = props.dark ? 'dark' : 'light';
    return (
        <div className='text-center mx-auto my-5 p-5'>
            <div className={ 'lds-grid ' + theme }>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
            </div>
            <p className={ 'h3 text-' + theme }> carregando ... </p>
        </div>
    );
};

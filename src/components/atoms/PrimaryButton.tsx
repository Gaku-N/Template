export const PrimaryButton = (props: { children: string; }) => 
{
    const {children} = props;
    const onClick = () => {
        alert('押されたよ')
    }
    return (
        <button onClick={onClick}>{children}</button>
    )
}

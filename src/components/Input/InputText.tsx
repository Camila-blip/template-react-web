/**Patterns de composição */

interface InputProps {
    value: string;
}
export default function InputText({ value }: InputProps) {
    return (
        <>
            <input value={value} />
        </>
    );
}

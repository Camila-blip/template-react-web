/**Patterns de composição */

interface InputProps {
    value: string;
}
export default function InputMask({ value }: InputProps) {
    return (
        <>
            <input value={value} placeholder="mask" />
        </>
    );
}

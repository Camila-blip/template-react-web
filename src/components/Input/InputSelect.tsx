/**Patterns de composição */

interface InputProps {
    value: string;
}
export default function InputSelect({ value }: InputProps) {
    return (
        <>
            <select>
                <option value="opcao1">Opção 1</option>
                <option value="opcao2">Opção 2</option>
                <option value="opcao3">Opção 3</option>
                <option value="opcao4">Opção 4</option>
            </select>
        </>
    );
}

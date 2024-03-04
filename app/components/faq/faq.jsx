import FaqItem from "./faq-item";

export default function Faq({ items }) {
    return (
        <div className="flex flex-col items-center w-full gap-10 px-5 py-16 overflow-hidden md:gap-16 bg-blue">
            <h1 className="text-4xl font-bold text-center text-white">
                FAQ
            </h1>
            <div className="flex flex-col w-full gap-6 max-w-[800px]">
                {items.map(item => (
                    <FaqItem key={item.key} title={item.title}>
                        {item.body}
                    </FaqItem>
                ))}
            </div>
        </div>
    )
}
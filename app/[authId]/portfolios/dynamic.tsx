import ScrollStack, { ScrollStackItem } from "@/components/ScrollStack";

function ScrollItems() {
  return (
    <ScrollStack>
      <ScrollStackItem itemClassName="bg-red-400">
        <h2>Card 1</h2>
        <p>This is the first card in the stack</p>
      </ScrollStackItem>
      <ScrollStackItem itemClassName="bg-blue-400">
        <h2>Card 2</h2>
        <p>This is the second card in the stack</p>
      </ScrollStackItem>
      <ScrollStackItem itemClassName="bg-green-400">
        <h2>Card 3</h2>
        <p>This is the third card in the stack</p>
      </ScrollStackItem>
    </ScrollStack>
  );
}

export { ScrollItems };

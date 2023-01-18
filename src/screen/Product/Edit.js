// import { StatusBar } from "expo-status-bar";
import { useEffect } from "react";
import { getProducts } from "./api";
import React from "react";
import { Box, FlatList, FormControl, Input, VStack } from "native-base";

export default function EditProduct({ route }) {
  console.log(route.params.product.quantity);
  const [formData, setData] = React.useState({
    name: route.params.product.name,
    quantity: route.params.product.quantity,
  });

  return (
    <Box width="100%">
      <VStack mx="3">
        <FormControl isRequired my={2}>
          <FormControl.Label
            _text={{
              bold: true,
            }}
          >
            Name
          </FormControl.Label>
          <Input
            placeholder="name"
            value={formData.name}
            onChangeText={(value) => setData({ ...formData, name: value })}
          />
        </FormControl>
        <FormControl isRequired my={2}>
          <FormControl.Label
            _text={{
              bold: true,
            }}
          >
            Quantity
          </FormControl.Label>
          <Input
            placeholder="quantity"
            value={String(formData.quantity)}
            onChangeText={(value) => setData({ ...formData, quantity: value })}
          />
        </FormControl>
      </VStack>
    </Box>
  );
}

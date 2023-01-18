// import { StatusBar } from "expo-status-bar";
import { useEffect } from "react";
import { getProducts } from "./api";
import React from "react";
import { Box, FlatList } from "native-base";
import ProductCard from "./ProductCard";

export default function Product({ navigation }) {
  const [data, setData] = React.useState({});

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    const resp = await getProducts();
    setData(resp);
  };

  return (
    <Box width="100%">
      <FlatList
        data={data}
        renderItem={({ item }) => (
          <ProductCard
            item={item}
            fetchProducts={fetchProducts}
            navigation={navigation}
          />
        )}
        keyExtractor={(item) => item._id}
      />
    </Box>
  );
}
